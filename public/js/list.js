function app(state, output) {
  const appendFunctions = state.map(function (content, index) {
    return append(message(content, index));
  });

  R.pipe(...appendFunctions)(output);
}

function message(content, index) {
  return R.compose(
    append(text(content)),
    attr("data-index", index),
    addClass("bg-light"),
    addClass("p-4")
  )(elem("div"));
}

app(
  Object.freeze(["First message", "Second message"]),
  getElem("message-list")
);
