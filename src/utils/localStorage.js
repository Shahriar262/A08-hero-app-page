export const loadAppList = ()=> {
    try{
        const data = localStorage.getItem('appList')
        return data ? JSON.parse(data) : []
    }catch(err){
        console.log(err);
        return []
    }
}

export const updatedApps = (app)=> {
    const appList = loadAppList()

    try{
        const isDuplicate = appList.some(p => p.id === app.id)
        if(isDuplicate) return

        const updatedAppsList = [...appList, app]
        localStorage.setItem('appList', JSON.stringify(updatedAppsList))
    }catch(err){
        console.log(err);
        
    }
}


export const removeFromInstallation = id => {
    const appList = loadAppList()

    try{
        const updatedAppsList = appList.filter(p => p.id !== id)
         localStorage.setItem('appList', JSON.stringify(updatedAppsList))
    }catch(err){
        console.log(err);
        
    }
   
}