
export const Add_Todo = (payload)=>{
    console.log('action')
    return({
        type:'Add-Todo',
        payload
    })
}
export const Delete_Todo = (payload)=>{
  return({
      type:'Delete-Todo',
      payload
  })
}
export const Toggle_Todo = (payload)=>{
  return({
      type:'Toggle-Todo',
      payload
  })
}
export const Change_Tab = (payload)=>{
  console.log('hello')
  return({
      type:'Change-Tab',
      payload
  })
}

