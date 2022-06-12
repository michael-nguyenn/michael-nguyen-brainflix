import "./Upload.scss";
import Button from "../../components/Button/Button";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import axios from "axios";
import { API_URL } from "../../utilities/apiUtils";

function Upload(props) {
  // HANDLING CANCEL BUTTON TO REDIRECT TO HOME PAGE
  function redirect(event) {
    event.preventDefault();
    props.history.push("/");
  }

  // HANDLING FORM SUBMIT FOR NEW VIDEO UPLOADS
  function handleOnSubmit(event) {
    event.preventDefault();

    //COLLECTING USER INPUT
    const newVideoUpload = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    // MAKING POST REQUEST TO API ENDPOINT AND REDIRECTING THEM
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
                  required
                ></input>
              </label>

              <label className="publish-form__name">
                ADD A VIDEO DESCRIPTION
                <textarea
                  className="publish-form__input publish-form__input--large"
                  type="text"
                  placeholder="Add a description to your video"
                  name="description"
                  required
                ></textarea>
              </label>
            </div>
          </div>
          <div className="publish-form__button">
            <Button className="button button--publish" name="PUBLISH" />

            <button onClick={redirect} className="publish-form__cancel">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Upload;
