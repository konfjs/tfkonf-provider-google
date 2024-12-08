import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeAppGroupArgsAttributes {
  name?: string;
  value?: string;
}

export interface GoogleApigeeAppGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeAppGroupArgs {
  channel_id?: string;
  channel_uri?: string;
  display_name?: string;
  name: string;
  org_id: string;
  status?: string;
  attributes?: GoogleApigeeAppGroupArgsAttributes[];
  timeouts?: GoogleApigeeAppGroupArgsTimeouts;
}

export class google_apigee_app_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeAppGroupArgs) {
    const meta = {attributes:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_app_group", resourceName);
  }

  get app_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_group_id`;
  }

  get created_at(): string {
    return `${this.resourceType}.${this.resourceName}.created_at`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_at(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_at`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }
}
