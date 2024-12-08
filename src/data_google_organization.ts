import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleOrganizationArgs {
  organization?: string;
}

export class data_google_organization extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleOrganizationArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_organization", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get directory_customer_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.directory_customer_id`;
  }

  get domain(): string {
    return `data.${this.resourceType}.${this.resourceName}.domain`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_state`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get org_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.org_id`;
  }
}
