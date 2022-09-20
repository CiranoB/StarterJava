import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

export const login = async (url: any, data: any, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data);
};

//User
export const registerUser = async (url: any, data: any, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data);
};

export const deleteUser = async (url: any, headers: any) => {
    await api.delete(url, headers)
}

export const getIdUser = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const getAllUser = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const updateUser =async (url:any, data: any, setData: any, headers: any) => {
    const response = await api.put(url, data, headers)
    setData(response.data)    
}

export const myPayments =async (url:any, setData:any, headers:any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const myDiet =async (url:any, setData:any, headers:any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}
//User
//Nutritionist
export const registerNutritionist = async (url: any, data: any, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data);
};

export const deleteNutritionist = async (url: any, headers: any) => {
    await api.delete(url, headers)
}

export const getIdNutritionist = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const getAllNutritionist = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const updateNutritionist =async (url:any, data: any, setData: any, headers: any) => {
    const response = await api.put(url, data, headers)
    setData(response.data)    
}
//Nutrtitionist
//Bookkeeper
export const registerBookkeeper = async (url: any, data: any, setData: any) => {
    const response = await api.post(url, data);
    setData(response.data);
};

export const deleteBookkeeper = async (url: any, headers: any) => {
    await api.delete(url, headers)
}

export const getIdBookkeeper = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const getAllBookkeeper = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const updateBookkeeper =async (url:any, data: any, setData: any, headers: any) => {
    const response = await api.put(url, data, headers)
    setData(response.data)    
}
//Bookkeeper
//Group
export const registerGroup = async (url: any, data: any, setData: any, headers: any) => {
    const response = await api.post(url, data, headers);
    setData(response.data);
};

export const deleteGroup = async (url: any, headers: any) => {
    await api.delete(url, headers)
}

export const getIdGroup = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const getAllGroup = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const updateGroup =async (url:any, data: any, setData: any, headers: any) => {
    const response = await api.put(url, data, headers)
    setData(response.data)    
}
//Group
//Diet
export const registerDiet = async (url: any, data: any, setData: any, headers: any) => {
    const response = await api.post(url, data, headers);
    setData(response.data);
};

export const deleteDiet = async (url: any, headers: any) => {
    await api.delete(url, headers)
}

export const getIdDiet = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const getAllDiet = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const updateDiet =async (url:any, data: any, setData: any, headers: any) => {
    const response = await api.put(url, data, headers)
    setData(response.data)    
}
//Diet
//Pay
export const registerPay = async (url: any, data: any, setData: any, headers: any) => {
    const response = await api.post(url, data, headers);
    setData(response.data);
};

export const deletePay = async (url: any, headers: any) => {
    await api.delete(url, headers)
}

export const getIdPay = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const getAllPay = async (url: any, setData: any, headers: any) => {
    const response = await api.get(url, headers)
    setData(response.data)
}

export const updatePay =async (url:any, data: any, setData: any, headers: any) => {
    const response = await api.put(url, data, headers)
    setData(response.data)    
}
//Pay