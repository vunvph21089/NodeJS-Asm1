import Joi from "joi";
import product from "../model/product";

const productsSchame = new Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required(),
    desc:Joi.string().required(),
   status:Joi.string().required(),
    quanty:Joi.string().required(),
})

export const creat = async (req,res)=>{
    try {
        const body = req.body    
        const data = await product.create(body)
        const { error } = productsSchame.validate(body)
        if(error){
            res.status(200).json({
                mess:error.detail[0].message
            })
        }
        return res.status(200).json({
            mess: "them thanh cong",data
        })
    } catch (error) {
        res.status(404).json({
            mess:error
        })
    }
}


export const getAll = async (req,res)=>{
    try {
          
        const data = await product.find()
        if(!data){
            res.status(200).json({
                mess:"ko co du lieu"
            })
        }
        return res.status(200).json({
            mess:data
        })
    } catch (error) {
        res.status(404).json({
            mess:error
        })
    }
}

export const get = async (req,res)=>{
    try {
        const id = req.params.id
        const data = await product.findById(id)
        if(!data){
            res.status(200).json({
                mess:"ko co du lieu"
            })
        }
        return res.status(200).json({
            mess:data
        })
    } catch (error) {
        res.status(404).json({
            mess:error
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await product.findOneAndUpdate({ _id: id }, body, { new: true });
        return (!data) ? res.status(200).json({ message: "Cap nhat san pham that bai" })
            : res.status(200).json({ message: "Cap nhat san pham thanh cong", data });
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;      
        const data = await product.deleteOne({ _id: id });
        return (!data) ? res.status(200).json({ message: "Xoa san pham that bai" })
            : res.status(200).json({ message: "Xoa san pham thanh cong", });
    } catch (error) {
        return res.status(404).json({ message: error })
    }
}