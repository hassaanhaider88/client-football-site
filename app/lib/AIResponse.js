import HereGetBestSystemPromptBaseOnService from './systemPrompts';


export const AIResponse = async (Message, SerivceUserd) => {
    try {
        const getSystemPromp = HereGetBestSystemPromptBaseOnService[SerivceUserd];
        console.log(getSystemPromp);
        return `ai will reponse as soon as possible please wait... ${getSystemPromp}`;
    } catch (error) {
        console.log("something wents wrong.", error);
    }
};
