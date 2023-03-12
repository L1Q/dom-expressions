const children = <div />;
const dynamic = {
  children
};
const template = <Module children={children} />;
const template2 = <module children={children} />;
const template3 = <module children={children}>Hello</module>;
const template4 = (
  <module children={children}>
    <Hello />
  </module>
);
const template5 = <module children={dynamic.children} />;
const template6 = <Module children={dynamic.children} />;
const template7 = <module {...dynamic} />;
const template8 = <module {...dynamic}>Hello</module>;
const template9 = <module {...dynamic}>{dynamic.children}</module>;
const template10 = <Module {...dynamic}>Hello</Module>;
const template11 = <module>{...children}</module>;
const template12 = <Module>{...children}</Module>;
const template13 = <module>{...dynamic.children}</module>;
const template14 = <Module>{...dynamic.children}</Module>;
const template15 = <module>Hi {...children}</module>;
const template16 = <Module>Hi {...children}</Module>;
const template17 = <module>{children()}</module>;
const template19 = <Module>{children()}</Module>;
const template20 = <module>{state.children()}</module>;
const template21 = <Module>{state.children()}</Module>;
const template22 = <module {...dynamic}>Hi{dynamic.children}</module>;

const tiles = [];
tiles.push(<div>Test 1</div>);
const template23 = <div>{tiles}</div>;

const comma = <div>{(expression(), "static")}</div>
