import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleGkeHubMembershipBindingArgs {
  location: string;
  membership_binding_id: string;
  membership_id: string;
  project?: string;
}

export class data_google_gke_hub_membership_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleGkeHubMembershipBindingArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_gke_hub_membership_binding", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get membership_binding_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.membership_binding_id`;
  }

  get membership_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.membership_id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get scope(): string {
    return `data.${this.resourceType}.${this.resourceName}.scope`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
