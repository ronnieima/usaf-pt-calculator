function AgeSelect() {
  return (
    <div>
      <h3 className="text-white text-2xl tracking-widest uppercase mb-3">
        Age Group
      </h3>

      <select
        name="ageGroups"
        className="w-full rounded-lg p-5 text-stone-700 shadow-lg font-semibold text-center "
      >
        <option value={"<25"}>&lt; 25</option>
        <option value={"25-29"}>25-29</option>
        <option value={"30-34"}>30-34</option>
        <option value={"35-39"}>35-39</option>
        <option value={"40-44"}>40-44</option>
        <option value={"45-49"}>45-49</option>
        <option value={"50-54"}>50-54</option>
        <option value={"55-59"}>55-59</option>
        <option value={">60"}>&gt; 60</option>
      </select>
    </div>
  );
}

export default AgeSelect;
