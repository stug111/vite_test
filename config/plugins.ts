import react from '@vitejs/plugin-react'
import renameIndex from './renameIndex'

const plugins = [react(), renameIndex()]

export default plugins