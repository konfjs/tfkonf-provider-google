import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeFlowhookArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeFlowhookArgs {
  continue_on_error?: boolean;
  description?: string;
  environment: string;
  flow_hook_point: string;
  org_id: string;
  sharedflow: string;
  timeouts?: GoogleApigeeFlowhookArgsTimeouts;
}

export class google_apigee_flowhook extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeFlowhookArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_flowhook", resourceName);
  }

  get environment(): string {
    return `${this.resourceType}.${this.resourceName}.environment`;
  }

  get flow_hook_point(): string {
    return `${this.resourceType}.${this.resourceName}.flow_hook_point`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get sharedflow(): string {
    return `${this.resourceType}.${this.resourceName}.sharedflow`;
  }
}
