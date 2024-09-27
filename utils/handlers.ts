

export const idToName = (text: string): string =>  {
    const data = String(text).replace('-', ' ')

    return data[0].toUpperCase() + data.slice(1, data.length)
}