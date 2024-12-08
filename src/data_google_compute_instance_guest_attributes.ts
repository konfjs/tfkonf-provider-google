import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeInstanceGuestAttributesArgs {
  name: string;
  query_path?: string;
  variable_key?: string;
}

export class data_google_compute_instance_guest_attributes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeInstanceGuestAttributesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_instance_guest_attributes", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get query_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.query_value`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get variable_value(): string {
    return `data.${this.resourceType}.${this.resourceName}.variable_value`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
