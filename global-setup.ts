import rimraf from "rimraf";

let globalSetup = async(): Promise<void> =>  {
    await new Promise(resolve => {
        rimraf(`./allure-results`, resolve);
        console.log(`Executing Allure dir clean up`)
    });
}
export default globalSetup;