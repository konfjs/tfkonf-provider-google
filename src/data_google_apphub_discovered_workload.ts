import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleApphubDiscoveredWorkloadArgs {
  location: string;
  project?: string;
  workload_uri: string;
}

export class data_google_apphub_discovered_workload extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleApphubDiscoveredWorkloadArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_apphub_discovered_workload", resourceName);
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

  get workload_properties(): string {
    return `data.${this.resourceType}.${this.resourceName}.workload_properties`;
  }

  get workload_reference(): string {
    return `data.${this.resourceType}.${this.resourceName}.workload_reference`;
  }

  get workload_uri(): string {
    return `data.${this.resourceType}.${this.resourceName}.workload_uri`;
  }
}
