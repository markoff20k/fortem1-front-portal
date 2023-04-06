import React from 'react';
import {slugify} from "../../../utils";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const BlogList = ({ data, StyleVar }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link to={process.env.PUBLIC_URL + `/category/${slugify(value)}`} key={i}>{value}{i !== data.categories.length - 1 && ","}</Link>
        )
    });

    
    return (
        <div className={`rn-card ${StyleVar}`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={`/blog-details/${data.id}`} className="image">
                        <img src={`${data.image}`} alt="Blog Image" />
                    </Link>
                </div>
                <div className="content">
                    <ul className="rn-meta-list">
                        <li><Link to={process.env.PUBLIC_URL + `/archive/${slugify(data.author)}`}>{data.author}</Link></li>
                        
                        <li>{data.date}</li>
                    </ul>
                    <h4 className="title">
                        <Link to={`/blog-details/${data.id}`}>
                            {data.title}
                        </Link>
                    </h4>
                    <h4 className="desc">
                        
                            {data.excerpt}
                        
                    </h4>
                </div>
            </div>
        </div>
    )
}
BlogList.propTypes = {
    data: PropTypes.object
};
export default BlogList;
