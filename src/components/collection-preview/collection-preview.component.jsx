import React from 'react';
import CollectionItem from '../collection-item/collection-item.component.jsx';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items, id}) => (
    <div className = "collection-preview">
        <h1 className = "title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, id) => id < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key= {id} { ...otherItemProps }/>
                ))
            }
        </div>
    </div>
)
export default CollectionPreview;