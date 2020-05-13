import * as React from "react";

import Title from "../../../components/title";
import FormNavigation from "../../../components/form-navigation";

import createQuestion from "../../../directives/create-question/create-question";
import updateDb from "../../../directives/update-db";

function ConflictObject() {
  return (
    <div>
      <Title titleText="2. Тип конфликта" />

      {createQuestion("conflict-object", "2.1. С кем Вы конфликтуете?", [
        ["human-conflict", "С человеком"],
        ["group-conflict", "С группой людей"],
        ["self-conflict", "С собой"],
      ])}

      <FormNavigation
        id="navigation-conflict-object"
        backLink="/Hramova-test/conflict-existence"
        forwardLink="/Hramova-test/conflict-reason-and-place"
        onClick={() => updateDb(1)}
      />
    </div>
  );
}

export default ConflictObject;
