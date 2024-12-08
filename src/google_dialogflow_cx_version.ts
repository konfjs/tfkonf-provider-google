import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDialogflowCxVersionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDialogflowCxVersionArgs {
  description?: string;
  display_name: string;
  parent?: string;
  timeouts?: GoogleDialogflowCxVersionArgsTimeouts;
}

export class google_dialogflow_cx_version extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDialogflowCxVersionArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dialogflow_cx_version", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get nlu_settings(): string {
    return `${this.resourceType}.${this.resourceName}.nlu_settings`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
