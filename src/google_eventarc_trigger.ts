import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEventarcTriggerArgsDestinationCloudRunService {
  path?: string;
  service: string;
}

export interface GoogleEventarcTriggerArgsDestinationGke {
  cluster: string;
  location: string;
  namespace: string;
  path?: string;
  service: string;
}

export interface GoogleEventarcTriggerArgsDestinationHttpEndpoint {
  uri: string;
}

export interface GoogleEventarcTriggerArgsDestinationNetworkConfig {
  network_attachment: string;
}

export interface GoogleEventarcTriggerArgsDestination {
  workflow?: string;
  cloud_run_service?: GoogleEventarcTriggerArgsDestinationCloudRunService;
  gke?: GoogleEventarcTriggerArgsDestinationGke;
  http_endpoint?: GoogleEventarcTriggerArgsDestinationHttpEndpoint;
  network_config?: GoogleEventarcTriggerArgsDestinationNetworkConfig;
}

export interface GoogleEventarcTriggerArgsMatchingCriteria {
  attribute: string;
  operator?: string;
  value: string;
}

export interface GoogleEventarcTriggerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEventarcTriggerArgsTransportPubsub {
  topic?: string;
}

export interface GoogleEventarcTriggerArgsTransport {
  pubsub?: GoogleEventarcTriggerArgsTransportPubsub;
}

export interface GoogleEventarcTriggerArgs {
  channel?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  service_account?: string;
  destination: GoogleEventarcTriggerArgsDestination;
  matching_criteria: GoogleEventarcTriggerArgsMatchingCriteria[];
  timeouts?: GoogleEventarcTriggerArgsTimeouts;
  transport?: GoogleEventarcTriggerArgsTransport;
}

export class google_eventarc_trigger extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEventarcTriggerArgs) {
    const meta = {destination:{isBlock:true,cloud_run_service:{isBlock:true},gke:{isBlock:true},http_endpoint:{isBlock:true},network_config:{isBlock:true}},matching_criteria:{isBlock:true},timeouts:{isBlock:true},transport:{isBlock:true,pubsub:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_eventarc_trigger", resourceName);
  }

  get conditions(): string {
    return `${this.resourceType}.${this.resourceName}.conditions`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get event_data_content_type(): string {
    return `${this.resourceType}.${this.resourceName}.event_data_content_type`;
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

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
