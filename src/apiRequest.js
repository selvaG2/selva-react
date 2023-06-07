const apiRequest = async (url = '',optionsObj = null, errMsg = null) => {

    try{

        const response = await fetch(url,optionsObj); 
        // second para meter is object
        if(!response.ok) throw Error ("Plese reload the app")

    }catch(err){

        errMsg = err.Message;

    }finally{
        return errMsg;

    }

}

export default apiRequest