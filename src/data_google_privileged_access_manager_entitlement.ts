import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGooglePrivilegedAccessManagerEntitlementArgs {
  entitlement_id?: string;
  location?: string;
  parent?: string;
}

export class data_google_privileged_access_manager_entitlement extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGooglePrivilegedAccessManagerEntitlementArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_privileged_access_manager_entitlement", resourceName);
  }

  get additional_notification_targets(): string {
    return `data.${this.resourceType}.${this.resourceName}.additional_notification_targets`;
  }

  get approval_workflow(): string {
    return `data.${this.resourceType}.${this.resourceName}.approval_workflow`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get eligible_users(): string {
    return `data.${this.resourceType}.${this.resourceName}.eligible_users`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get max_request_duration(): string {
    return `data.${this.resourceType}.${this.resourceName}.max_request_duration`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get privileged_access(): string {
    return `data.${this.resourceType}.${this.resourceName}.privileged_access`;
  }

  get requester_justification_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.requester_justification_config`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
