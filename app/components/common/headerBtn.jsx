import { Button,  } from "react-native"


function HeaderBtn ({handelOnPress , style }){ 

    return (
        <Button style={style} title="+" onPress={()=>handelOnPress()} />
    )
}

export default  HeaderBtn