import React from 'react';

export function Card(){
    return(
        <div className="card">
            <div className="card-body">
                <a href="#" className="btn btn-primary float-right" id="view-button">View</a>
                <a href="#" className="btn btn-primary float-right" id="save-button">Save</a>
                <h5 className="card-title">Title</h5>
                <p className="card-text">Author</p>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s47-maew-68-lyj4086-education.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=f793fa95e84dab16e60afbd6f30a8cff" class="rounded float-left img-thumbnail" alt="..." style={{ "width": "200px" }} />
                        </div>
                        <div className="col-9 float-left">
                            <p>Paste the summary for the book here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
