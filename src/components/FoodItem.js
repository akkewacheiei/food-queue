import React ,{Component} from 'react';

export default class FoodItem extends Component{
    render(){
        const {name,handleDelete,handleEdit} = this.props
        return(

        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{name}</h6>
            <div>
                <span onClick={handleEdit} className="mx-3 text-primary">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </span>
                <span onClick={handleDelete} className="text-danger">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </div>
        </li>
            
        )
    }
}