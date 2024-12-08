import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccSourceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccSourceArgs {
  description?: string;
  display_name: string;
  organization: string;
  timeouts?: GoogleSccSourceArgsTimeouts;
}

export class google_scc_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccSourceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_source", resourceName);
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

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }
}
