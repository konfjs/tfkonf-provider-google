import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMigrationCenterGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMigrationCenterGroupArgs {
  description?: string;
  display_name?: string;
  group_id: string;
  labels?: { [key: string]: string };
  location: string;
  timeouts?: GoogleMigrationCenterGroupArgsTimeouts;
}

export class google_migration_center_group extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMigrationCenterGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_migration_center_group", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get group_id(): string {
    return `${this.resourceType}.${this.resourceName}.group_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
