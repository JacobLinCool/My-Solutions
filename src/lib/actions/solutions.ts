import fs from "fs";
import path from "path";
import gm from "gray-matter";
import markdown from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItKatex from "markdown-it-katex";
import MarkdownItShiki from "markdown-it-shiki";

export type Solution = {
    name: string;
    title?: string;
    tags?: string[];
    content?: string;
    solutions: {
        c?: string;
        cpp?: string;
        java?: string;
        python?: string;
        javascript?: string;
        typescript?: string;
    };
};

export type SolutionMeta = {
    name: string;
    title?: string;
    tags?: string[];
};

const solutions_dir = path.resolve("solutions");

const solutions = get_solutions();

export async function get_solutions(): Promise<Solution[]> {
    const list = fs.readdirSync(solutions_dir).filter((item) => fs.statSync(path.resolve(solutions_dir, item)).isDirectory());

    const solutions: Solution[] = [];

    for (const item of list) {
        const solution: Solution = { name: item, solutions: {} };

        const solution_dir = path.resolve(solutions_dir, item);
        const md_file = path.resolve(solution_dir, "index.md");

        if (fs.existsSync(md_file)) {
            const solution_content = fs.readFileSync(md_file, "utf8");
            const matters = gm(solution_content);
            const attributes = matters.data;
            let content = matters.content;

            if (attributes && attributes.title) {
                solution.title = attributes.title;
            } else {
                solution.title = item;
            }

            if (attributes && attributes.tags) {
                solution.tags = attributes.tags;
            } else {
                solution.tags = [];
            }

            const files = fs.readdirSync(solution_dir);
            for (const file of files) {
                switch (path.extname(file)) {
                    case ".js":
                        solution.solutions.javascript = fs.readFileSync(path.resolve(solution_dir, file), "utf8");
                        break;
                    case ".cpp":
                        solution.solutions.cpp = fs.readFileSync(path.resolve(solution_dir, file), "utf8");
                        break;
                    case ".c":
                        solution.solutions.c = fs.readFileSync(path.resolve(solution_dir, file), "utf8");
                        break;
                    case ".java":
                        solution.solutions.java = fs.readFileSync(path.resolve(solution_dir, file), "utf8");
                        break;
                    case ".py":
                        solution.solutions.python = fs.readFileSync(path.resolve(solution_dir, file), "utf8");
                        break;
                    case ".ts":
                        solution.solutions.typescript = fs.readFileSync(path.resolve(solution_dir, file), "utf8");
                        break;
                }
            }

            if (Object.keys(solution.solutions).length > 0) {
                content += "\n\n# Solution";

                for (const key in solution.solutions) {
                    content += "\n\n## " + key.toUpperCase() + "\n\n```" + key + "\n" + solution.solutions[key] + "\n```";
                }
            }

            const md = markdown({
                html: true,
                linkify: true,
                typographer: true,
            });
            md.use(markdownItAnchor);
            // md.use(markdownItKatex);
            // md.use(MarkdownItShiki, { theme: "nord" });
            solution.content = md.render(content);

            solutions.push(solution);
        }
    }

    return solutions;
}

export async function get_solution(name: string): Promise<Solution> {
    return (await solutions).find((item) => item.name === name);
}

export async function get_solutions_meta(): Promise<SolutionMeta[]> {
    return (await solutions).map((solution) => ({
        name: solution.name,
        title: solution.title,
        tags: solution.tags,
    }));
}
