import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleContainerAzureClientArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleContainerAzureClientArgs {
  application_id: string;
  location: string;
  name: string;
  tenant_id: string;
  timeouts?: GoogleContainerAzureClientArgsTimeouts;
}

export class google_container_azure_client extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleContainerAzureClientArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_container_azure_client", resourceName);
  }

  get application_id(): string {
    return `${this.resourceType}.${this.resourceName}.application_id`;
  }

  get certificate(): string {
    return `${this.resourceType}.${this.resourceName}.certificate`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get tenant_id(): string {
    return `${this.resourceType}.${this.resourceName}.tenant_id`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
