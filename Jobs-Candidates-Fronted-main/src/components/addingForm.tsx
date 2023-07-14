
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IJob } from '../models/IJob';
import { ICandidate } from '../models/ICandidate';
import { JobService } from '../services/jobService';
import Example from './showLogo';
import { fieldObject } from '../pages/jobPage';
let showAddLogo: Boolean = false
let base64: string | unknown = ""

interface FormAddingProps {
    lines: fieldObject[];
    status: string;
    addFunc: (newO: ICandidate | IJob | Object) => Promise<ICandidate | IJob | Object | null>//I put Object because the type of data is not specific type...
}
export function FormAdding
    ({ lines, status, addFunc }: FormAddingProps) {
    interface IData {
        [key: string]: any

    }
    const [data, setData] = React.useState<IData | IJob | ICandidate>({})
    const [imgB, setImgB] = React.useState<string | unknown>('')




    if (status == "job")
        showAddLogo = true

    function handleChange(event: { target: { name: any; value: any; }; }) {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });

    }
    async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        try {
            if (status === 'job') {
                console.log("status ==='job'" + base64)

                data.logo = base64;
                // setData({ ...data, ["logo"]: base64 });

                console.log(data["logo"] + "handlesubmit")
            }
            console.log(typeof (data) + "data")
            console.log(JSON.parse(JSON.stringify(data)) + "dataaaaaaaaaaaaaaa");
            await addFunc(data);
        } catch (err) {
            console.error(err);
            alert("Failed to add " + { status });
        }
    }

    async function convertBase64(file: File) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }



    async function handleFileRead(event: React.ChangeEvent) {
        const target = event.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        base64 = await convertBase64(file)
        console.log(base64 + "typeeeeeeeeeeeeeeeeeeee")
    }
    return (
        <div>
            {
                lines.map((item, index) => {
                    if (item.field != "logo") {
                        return <>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off" >

                                <TextField required={item.required} variant="standard" id={item.field} label={item.field} name={item.field} value={data[item.field]} onChange={handleChange} />
                            </Box>
                            <div key={item.field}>
                                {item.field}
                            </div>
                        </>
                    }
                })
            }
            <button onClick={handleSubmit}>submit to add {status}</button>
            {showAddLogo &&
                <TextField
                    id="originalFileName"
                    type="file"
                    inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                    required
                    label="Document"
                    name="originalFileName"
                    onChange={handleFileRead}
                    size="small"
                    variant="standard"
                />}
            {showAddLogo && <Example imgB={imgB}></Example>}
        </div>
    );

}





