import type { PluginOption } from 'vite'

export default function renameIndex(fileName = 'index.html'): PluginOption {
    return {
        name: 'rename-files',
        enforce: 'post',
        apply: 'build',
        generateBundle(options, bundle) {
            const keys = Object.keys(bundle);
            const currentIndex = keys.find(name => /^(index).*.\html/.test(name))

            if(currentIndex) {
                const indexHtml = bundle[currentIndex]
                indexHtml.fileName = fileName
            }
        }
    }
}