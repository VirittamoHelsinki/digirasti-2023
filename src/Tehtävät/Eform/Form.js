// The form for eform exercise is constructed here as its own separate module

const Form = ({
  newFirstName,
  handleFirstNameChange,
  newLastName,
  handleLastNameChange,
  newEmail,
  handleEmailChange,
  newNumber,
  handleNumberChange,
  newWork1,
  handleWork1Change,
  newWork2,
  handleWork2Change,
  newDegree,
  handleDegreeChange,
  newDegreeName,
  handleDegreeNameChange,
  newAbout,
  handleAboutChange,
  submitForm,
  register,
  errors,
}) => {
  return (
    <form className="mailForm" onSubmit={submitForm}>
      <label htmlFor="FirstName">Etunimi *</label>
      <input
        {...register("FirstName", { required: true })}
        id="FirstName"
        className="textWritingArea"
        value={newFirstName}
        onChange={handleFirstNameChange}
        type="text"
      />
      {errors.FirstName?.type === "required" && (
        <p className="errorMessage">Etunimi on pakollinen tieto</p>
      )}
      <label htmlFor="LastName">Sukunimi *</label>
      <input
        {...register("LastName", { required: true })}
        id="LastName"
        className="textWritingArea"
        value={newLastName}
        onChange={handleLastNameChange}
        type="text"
      ></input>
      {errors.LastName?.type === "required" && (
        <p className="errorMessage">Sukunimi on pakollinen tieto</p>
      )}
      <label htmlFor="Email">Sähköposti *</label>
      <input
        {...register("Email", { required: true })}
        id="Email"
        className="textWritingArea"
        value={newEmail}
        onChange={handleEmailChange}
        type="email"
      ></input>
      {errors.Email?.type === "required" && (
        <p className="errorMessage">Sähköpostiosoite on pakollinen tieto</p>
      )}
      <label htmlFor="Number">Puhelinnumero *</label>
      <input
        {...register("Number", { required: true })}
        id="Number"
        className="textWritingArea"
        value={newNumber}
        onChange={handleNumberChange}
        type="text"
      ></input>
      {errors.Number?.type === "required" && (
        <p className="errorMessage">Puhelinnumero on pakollinen tieto</p>
      )}
      <label htmlFor="Work1">
        {" "}
        Työkokemus 1 (esimerkki: Myyjä, Ruokakauppa Oy, 01/2010-03/2015,
        Tehtäviin kuului tuotteiden hyllyttäminen ja kassankäyttö){" "}
      </label>
      <textarea
        id="Work1"
        className="textWritingArea smallTextarea"
        value={newWork1}
        onChange={handleWork1Change}
      ></textarea>
      <label htmlFor="Work2">Työkokemus 2</label>
      <textarea
        id="Work2"
        className="textWritingArea smallTextarea"
        value={newWork2}
        onChange={handleWork2Change}
      ></textarea>
      <label htmlFor="degree">Korkein koulutusaste</label>
      <select
        className="textWritingArea"
        value={newDegree}
        onChange={handleDegreeChange}
      >
        <option>Valitse koulutusaste...</option>
        <option>Kansakoulu</option>
        <option>Peruskoulu</option>
        <option>Ammattikoulu</option>
        <option>Opisto</option>
        <option>Ylioppilastutkinto</option>
        <option>Alempi korkeakoulututkinto</option>
        <option>Ylempi korkeakoulututkinto</option>
        <option>Ei mikään näistä (Selitä alempana tarkemmin)</option>
      </select>
      <label htmlFor="degree-name">Tutkintonimike</label>
      <input
        id="degree-name"
        className="textWritingArea"
        value={newDegreeName}
        onChange={handleDegreeNameChange}
        type="text"
      ></input>
      <br></br>
      <label htmlFor="About">
        Kerro kolmella lauseella, millainen työntekijä olisit *
      </label>
      <textarea
        {...register("About", { required: true })}
        id="About"
        className="textWritingArea mediumTextarea"
        value={newAbout}
        onChange={handleAboutChange}
      ></textarea>
      {errors.Number?.type === "required" && (
        <p className="errorMessage">Esittely on pakollinen tieto</p>
      )}
      <label htmlFor="Attachment">Lataa liite</label>
      <input {...register("Attachment")} type="file" className="fileInput"></input>
      <br />
      <button className="actionButton" type="submit">
        Lähetä
      </button>
    </form>
  );
};

export default Form;
