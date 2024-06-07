import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { UserRepository } from "../../Domain/repositories/UserRepository";
import { ResponseAPIDelivery } from "../source/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryForImage } from "../source/remote/api/ApiDelivery";
import mime from "mime";

export class UserRepositoryImpl implements UserRepository{
    async update(user: User): Promise<ResponseAPIDelivery> {
        try {

            const response = await ApiDelivery.put<ResponseAPIDelivery>('/users/updateWithoutImage', user);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
        
    }

    async updateWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPIDelivery> {

        try {

            let data = new FormData();
            data.append('image',{
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user))

            const response = await ApiDeliveryForImage.put<ResponseAPIDelivery>('/users/update', data);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
        
    }
}