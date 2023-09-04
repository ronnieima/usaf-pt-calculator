import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../../ui/RadioButton";
import { setGender } from "./userDetailsSlice";

function GenderSelect() {
  const { gender } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  return (
    <div className="my-3 uppercase">
      <h3>Gender</h3>
      <ul className="grid sm:grid-cols-2 gap-4 text-center">
        <RadioButton
          id="male"
          name="gender"
          text="male"
          dispatch={dispatch}
          value="male"
        />
        <RadioButton
          id="female"
          name="gender"
          text="female"
          value="female"
          dispatch={dispatch}
        />
      </ul>
    </div>
  );
}

export default GenderSelect;
