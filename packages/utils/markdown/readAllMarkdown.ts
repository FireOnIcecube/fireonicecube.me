import fs from 'fs-extra'
import path from 'path'
import { readMarkdown, type MarkdownFile } from './readMarkdown'

/**
 * 讀取整個資料夾的 Markdown 檔案
 * @param dirPath 資料夾路徑
 */
export async function readAllMarkdown<T = Record<string, any>>(
  dirPath: string,
): Promise<MarkdownFile<T>[]> {
  const files = await fs.readdir(dirPath)
  const mdFiles = files.filter((f) => f.endsWith('.md'))

  const result: MarkdownFile<T>[] = []

  for (const file of mdFiles) {
    const filePath = path.join(dirPath, file)
    const md = await readMarkdown<T>(filePath)
    result.push(md)
  }

  return result
}
