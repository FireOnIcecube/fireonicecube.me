import fs from 'fs-extra'
import matter from 'gray-matter'

export interface MarkdownFile<T = Record<string, any>> {
  data: T // frontmatter
  content: string // markdown 內容
}

/**
 * 讀取單一 Markdown 檔案，回傳 frontmatter + content
 * @param filePath Markdown 檔案路徑
 */
export async function readMarkdown<T = Record<string, any>>(
  filePath: string,
): Promise<MarkdownFile<T>> {
  const fileContent = await fs.readFile(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  return { data: data as T, content }
}
