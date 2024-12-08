import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleApphubDiscoveredServiceArgs {
  location: string;
  project?: string;
  service_uri: string;
}

export class data_google_apphub_discovered_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleApphubDiscoveredServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_apphub_discovered_service", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get service_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_properties`;
  }

  get service_reference(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_reference`;
  }

  get service_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_uri`;
  }
}
