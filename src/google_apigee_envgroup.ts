import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEnvgroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeEnvgroupArgs {
  hostnames?: string[];
  name: string;
  org_id: string;
  timeouts?: GoogleApigeeEnvgroupArgsTimeouts;
}

export class google_apigee_envgroup extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeEnvgroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_envgroup", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }
}
