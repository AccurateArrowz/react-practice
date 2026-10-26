const delay = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(()=> resolve(undefined), ms)
    })
}

await delay(2000)
console.log('delay complete')

export { }
