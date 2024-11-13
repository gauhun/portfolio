export function getAssetPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/garoono' : '';
    return `${basePath}${path}`;
} 