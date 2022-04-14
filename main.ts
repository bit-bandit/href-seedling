import { marked } from 'https://raw.githubusercontent.com/markedjs/marked/master/lib/marked.esm.js';

marked.setOptions({})

const css_path: string = './style.css';
const md_path: string = './input.md';
const out_path: string = './output.html';
const title: string = 'href-seedling';

const css: string = await Deno.readTextFile(css_path);

const rawMarkdown: string = await Deno.readTextFile(md_path);
const parsedMarkdown: string = await marked.parse(rawMarkdown);

const html: string =
  `<!DOCTYPE html>\n<html>\n<head>\n<title>${title}</title>\n<style>\n${css}\n</style><body>\n${parsedMarkdown}\n</body>\n</html>`;

await Deno.writeTextFile(out_path, html);
