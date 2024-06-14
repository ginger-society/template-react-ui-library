/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

console.log('running')

const main = async (): Promise<void> => {
	console.log('Main program running')
}
main()
	.then(() => {
		console.log('success...', __dirname)
	})
	.catch((e) => {
		console.log(e)
	})
// eslint-disable-next-line prettier/prettier
export {}
