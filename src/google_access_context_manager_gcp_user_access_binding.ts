import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerGcpUserAccessBindingArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAccessContextManagerGcpUserAccessBindingArgs {
  access_levels: string[];
  group_key: string;
  organization_id: string;
  timeouts?: GoogleAccessContextManagerGcpUserAccessBindingArgsTimeouts;
}

export class google_access_context_manager_gcp_user_access_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerGcpUserAccessBindingArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_gcp_user_access_binding", resourceName);
  }

  get access_levels(): string {
    return `${this.resourceType}.${this.resourceName}.access_levels`;
  }

  get group_key(): string {
    return `${this.resourceType}.${this.resourceName}.group_key`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get organization_id(): string {
    return `${this.resourceType}.${this.resourceName}.organization_id`;
  }
}
