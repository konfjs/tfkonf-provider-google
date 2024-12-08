import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIntegrationConnectorsManagedZoneArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIntegrationConnectorsManagedZoneArgs {
  description?: string;
  dns: string;
  labels?: { [key: string]: string };
  name: string;
  target_project: string;
  target_vpc: string;
  timeouts?: GoogleIntegrationConnectorsManagedZoneArgsTimeouts;
}

export class google_integration_connectors_managed_zone extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIntegrationConnectorsManagedZoneArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_integration_connectors_managed_zone", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get dns(): string {
    return `${this.resourceType}.${this.resourceName}.dns`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get target_project(): string {
    return `${this.resourceType}.${this.resourceName}.target_project`;
  }

  get target_vpc(): string {
    return `${this.resourceType}.${this.resourceName}.target_vpc`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
