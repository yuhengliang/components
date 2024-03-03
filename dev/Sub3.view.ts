import { Env, Prop, View, div, h3 } from "@dlightjs/dlight"

@View
export default class Sub {
  @Env path
  @Prop ok
  willMount() {
    console.log("will mount")
  }
  didMount() {
    console.log("did mount")
  }
  willUnmount() {
    console.log("will unmount")
  }
  didUnmount() {
    console.log("did unmount")
  }

  Body() {
    div(this.path)
    h3(this.ok ?? "212121212" + "shit")
  }
}
