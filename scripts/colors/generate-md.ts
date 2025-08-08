import colors from 'material-colors'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const mdRowsArr: string[] = []

Object.entries(colors).forEach(([colorName, shades]) => {
  if (typeof shades === 'object') {
    Object.entries(shades as object)
      .filter(([shade]) => !Number.isNaN(Number(shade)))
      .forEach(([shade]) => {
        mdRowsArr.push(`| ${colorName} | ${shade} | \`--neo-color-${colorName}-${shade}\` |`)
      })
  } else if (typeof shades === 'string') {
    mdRowsArr.push(`| ${colorName} | - | \`--neo-color-${colorName}\` |`)
  }
})

const mdHeader = `# Material Colors

> Auto-generated documentation of available CSS variables for colors.

| Color | Shade | CSS Variable |
|-------|-------|--------------|
`

const mdContent = `${mdHeader}${mdRowsArr.join('\n')}\n`

const mdFilePath = join(process.cwd(), 'docs/colors.md')
mkdirSync(dirname(mdFilePath), { recursive: true })
writeFileSync(mdFilePath, mdContent)

console.log('✅ Colors.md generated')
