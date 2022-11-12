import { ElNotification } from "element-plus"

function Success (info) {
    ElNotification({
        title: "Success",
        type: "success",
        position: "bottom-right",
        message: "Success"
    })
}

function Error (err) {
    console.log("erros", err)
    if (parseInt(err?.response.status) < 500) {
        Object.keys(err?.response?.data).forEach(key => {
            setTimeout(
                () => {
                    ElNotification({
                        title: key?.replace("_", " ")?.toUpperCase(),
                        type: "warning",
                        position: "bottom-right",
                        message: (err?.response?.data[key]).join(", ")
                    })
                }
                , 1000
            )

        })
    } else {
        ElNotification({
            title: "Error",
            type: "error",
            position: "bottom-right",
            message: "An Unknown Error Occurred"
        })
    }
}

export {
    Success,
    Error
}