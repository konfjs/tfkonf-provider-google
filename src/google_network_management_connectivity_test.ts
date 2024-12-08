import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkManagementConnectivityTestArgsDestination {
  instance?: string;
  ip_address?: string;
  network?: string;
  port?: number;
  project_id?: string;
}

export interface GoogleNetworkManagementConnectivityTestArgsSource {
  instance?: string;
  ip_address?: string;
  network?: string;
  network_type?: string;
  port?: number;
  project_id?: string;
}

export interface GoogleNetworkManagementConnectivityTestArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkManagementConnectivityTestArgs {
  description?: string;
  labels?: { [key: string]: string };
  name: string;
  protocol?: string;
  related_projects?: string[];
  destination: GoogleNetworkManagementConnectivityTestArgsDestination;
  source: GoogleNetworkManagementConnectivityTestArgsSource;
  timeouts?: GoogleNetworkManagementConnectivityTestArgsTimeouts;
}

export class google_network_management_connectivity_test extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkManagementConnectivityTestArgs) {
    const meta = {destination:{isBlock:true},source:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_management_connectivity_test", resourceName);
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

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
