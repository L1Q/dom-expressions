export function template(html: string, count: number, isSVG?: boolean): Element;
export function effect<T>(fn: (prev?: T) => T, init?: T): any;
export function memo(fn: () => any, equal: boolean): () => any;
export function insert(
  parent: Element | Document | ShadowRoot | DocumentFragment | Node,
  accessor: any,
  init?: any,
  marker?: Node
): any;
export function createComponent(Comp: (props: any) => any, props: any, dynamicKeys?: string[]): any;
export function delegateEvents(eventNames: string[]): void;
export function clearDelegatedEvents(): void;
export function spread(node: Element, accessor: any, isSVG?: Boolean, skipChildren?: Boolean): void;
export function classList(
  node: Element,
  value: { [k: string]: boolean },
  prev?: { [k: string]: boolean }
): void;
export function style(
  node: Element,
  value: { [k: string]: string },
  prev?: { [k: string]: string }
): void;
export function currentContext(): any;
export function renderToString(
  fn: (done?: (rendered: any) => void) => any,
  options?: {
    timeoutMs?: number;
  }
): Promise<string>;
export function ssr(template: TemplateStringsArray, ...nodes: any[]): () => string;
export function ssrClassList(value: { [k: string]: boolean }): string;
export function ssrStyle(value: { [k: string]: string }): string;
export function ssrSpread(accessor: any, isSVG: boolean, skipChildren: boolean): () => string;
export function renderDOMToString(
  fn: (done?: (rendered: any) => void) => any,
  options?: {
    timeoutMs?: number;
  }
): Promise<string>;
export function hydrate(
  fn: () => unknown,
  node: Element | Document | ShadowRoot | DocumentFragment | Node
): void;
export function getHydrationKey(): string;
export function getNextElement(template: HTMLTemplateElement, isSSR: boolean): Node;
export function getNextMarker(start: Node): [Node, Array<Node>];
export function generateHydrationEventsScript(eventNames: string[]): string;