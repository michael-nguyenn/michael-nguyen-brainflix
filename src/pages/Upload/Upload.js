import "./Upload.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import { API_URL } from "../../utilities/apiUtils";

function Upload(props) {
  // const redirect = (event) => {
  //   event.preventDefault();
  //   props.history.push("/");
  // };

  function handleOnSubmit(event) {
    event.preventDefault();

    const newVideoUpload = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    axios
      .post(API_URL, newVideoUpload)

      .then(() => {
        props.history.push("/");
      });
  }

  return (
    <section className="publish">
      <div className="publish__wrapper">
        <h1 className="publish__title">Upload Video</h1>

        <form onSubmit={handleOnSubmit} className="publish-form">
          <div className="publish-form__wrapper">
            <div className="publish-thumbnail">
              <h4 className="publish-thumbnail__title">VIDEO THUMBNAIL</h4>
              <img
                className="publish-thumbnail__picture"
                src={videoThumbnail}
                alt="video thumbnail"
              />
            </div>

            <div className="publish-form__container">
              <label className="publish-form__name">
                TITLE YOUR VIDEO
                <input
                  className="publish-form__input"
                  type="text"
                  placeholder="Add a title to your video"
                  name="title"
                ></input>
              </label>

              <label className="publish-form__name">
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="publish-form__input publish-form__input--large"
                  type="text"
                  placeholder="Add a description to your video"
                  name="description"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="publish-form__button">
            <Button className="button button--publish" name="PUBLISH" />

            <Link to="/" className="publish-form__cancel">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Upload;
